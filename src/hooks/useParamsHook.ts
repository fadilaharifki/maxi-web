import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const useParamsHook = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [params, setParamsState] = useState<{ [key: string]: string }>({});
  const [path, setPath] = useState<string>("");

  const getAllParams = useCallback(() => {
    const newParams: { [key: string]: string } = {};
    searchParams.forEach((value, key) => {
      newParams[key] = value;
    });
    return newParams;
  }, [searchParams]);

  const getParam = (name: string) => {
    return searchParams.get(name);
  };

  const updateParams = (newParams: { [key: string]: string | number }) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    Object.keys(newParams).forEach((key) => {
      currentParams.set(key, newParams[key].toString());
    });
    router.push(`${pathname}?${currentParams.toString()}`, { scroll: false });
  };

  const removeParams = (names: string | string[]) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    if (Array.isArray(names)) {
      names.forEach((name) => currentParams.delete(name));
    } else {
      currentParams.delete(names);
    }
    router.push(`${pathname}?${currentParams.toString()}`, { scroll: false });
  };

  const getFullURL = useCallback(() => {
    if (typeof window !== "undefined") {
      const protocol = window.location.protocol;
      const host = window.location.host;
      const queryParams = searchParams.toString();
      return `${protocol}//${host}${pathname}${
        queryParams ? `?${queryParams}` : ""
      }`;
    }
    return "";
  }, [pathname, searchParams]);

  useEffect(() => {
    const newParams = getAllParams();
    if (JSON.stringify(newParams) !== JSON.stringify(params)) {
      setParamsState(newParams);
    }
  }, [getAllParams, params]);

  return {
    params,
    getAllParams,
    getParam,
    updateParams,
    removeParams,
    getFullURL,
  };
};

export default useParamsHook;
