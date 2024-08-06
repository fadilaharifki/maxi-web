"use client";

import LayoutComponent from "@/components/layout";
import { InputWithLabel } from "@/components/ui/input";
import { TextareaWithLabel } from "@/components/ui/textarea";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";

// Definisikan skema validasi Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number must be only digits")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  message: yup.string().optional(),
});

// Tipe data untuk input form
interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  message?: string;
}

const ContactUsModule = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const fieldForm: Array<{
    label: string;
    name: keyof FormData;
    type: string;
  }> = [
    { label: "Name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "text" },
    { label: "Phone Number", name: "phoneNumber", type: "text" },
  ];

  return (
    <LayoutComponent>
      <section>
        <div className="relative flex flex-col h-full bg-green-white">
          <Image
            src="/assets/image/background4.jpg"
            width={1000}
            height={1000}
            alt="Logo"
            className="w-screen h-screen object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 flex flex-col justify-center gap-5 px-10">
            <div className="grid grid-cols-2">
              <div className="flex justify-center items-center">
                <div className="col-span-3 flex justify-start flex-col items-start gap-10">
                  <div>
                    <div className="font-poppins text-3xl text-bold text-white">
                      BIMANTIS
                    </div>
                    <div className="font-poppins text-3xl text-bold text-white">
                      PT. BIMA INTI SELARAS
                    </div>
                  </div>
                  <div className="flex justify-start flex-col items-start">
                    <div className="font-poppins text-xl text-bold text-white">
                      Head Office
                    </div>
                    <div className="flex items-center font-poppins text-sm text-bold text-white">
                      <MapPin className="w-3 h-3 mr-2" /> Jl. Lautze No. 12
                      Jakarta Pusat - Indonesia 10750
                    </div>
                    <div className="flex items-center font-poppins text-sm text-bold text-white">
                      <Phone className="w-3 h-3 mr-2" /> : +62 21 639 4547
                    </div>
                  </div>

                  <div className="flex justify-start flex-col items-start">
                    <div className="font-poppins text-xl text-bold text-white">
                      Global Sales Office :
                    </div>
                    <div className="flex items-center font-poppins text-sm text-bold text-white">
                      <MapPin className="w-3 h-3 mr-2" />
                      Ruko Mahkota Mas Blok J 57-60 Jl. M.H. Thamrin Kota
                      Tangerang - Indonesia 15117
                    </div>
                    <div className="flex items-center font-poppins text-sm text-bold text-white">
                      <Phone className="w-3 h-3 mr-2" /> : +62 21 5577 5024
                    </div>
                  </div>
                  <div className="flex justify-start flex-col items-start">
                    <div className="font-poppins text-xl text-bold text-white">
                      Indonesia Plant :
                    </div>
                    <div className="flex items-center font-poppins text-sm text-bold text-white">
                      <MapPin className="w-3 h-3 mr-2" />
                      Jl. Raya Pasar Kemis KM 3.5 Kabupaten Tangerang -
                      Indonesia 15135
                    </div>
                  </div>
                  <div className="flex justify-start flex-col items-start">
                    <div className="font-poppins text-xl text-bold text-white">
                      Timor-Leste Plant :
                    </div>
                    <div className="flex items-center font-poppins text-sm text-bold text-white">
                      <MapPin className="w-3 h-3 mr-2" />
                      Manleuana, Dom Alexio, Dili - Timor Leste
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-32">
                <form
                  className="flex flex-col gap-5 "
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {fieldForm.map((field, i) => (
                    <div key={i}>
                      <InputWithLabel
                        classNameLabel="text-white"
                        classNameError="text-yellow-500"
                        label={field.label}
                        {...register(field.name)}
                        isError={!!errors[field.name]?.message}
                        errorMessage={errors[field.name]?.message}
                      />
                    </div>
                  ))}
                  <div>
                    <TextareaWithLabel
                      classNameLabel="text-white"
                      label="Message (optional)"
                      {...register("message")}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="px-4 py-2 bg-primary-green text-white rounded-md"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default ContactUsModule;
