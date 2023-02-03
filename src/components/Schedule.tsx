import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { SectionSchedule, StyledSection } from "./styles/Section";
import Typography from "../styles/Typography";

type Props = {};

const Schedule = (props: Props) => {
  type Schedule = {
    name: string;
    cidade: string;
    phone: string;
    date: string;
  };
  const schema = yup.object().shape({
    name: yup.string().required(),
    cidade: yup.string().required(),
    phone: yup.string().required(),
    date: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schedule>({ resolver: yupResolver(schema) });
  const handleOnSubmit = (data: Schedule) => {
    console.log(data);
    const text = encodeURI(
      `*Gostaria de agendar uma viagem*: \n*Nome*: ${data.name} \n*Cidade*: ${data.cidade} \n*Data*: ${data.date}`
    );
    console.log(text);
    window.open(
      "https://api.whatsapp.com/send?phone=" + data.phone + "&text=" + text,
      "_blank"
    );
  };
  const child = {
    variantA: { rotateZ: 0, scale: 1 },
    variantB: { rotateZ: 360, scale: 1.2 },
  };
  return (
    <SectionSchedule
      id="schedule"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <Typography tag="h2">Agende sua viagem</Typography>
      <div>
        <div className="column-one">
          <p>
            Agendar sua viagem com a Orismar Viagens e Encomendas é fácil e
            conveniente. Com apenas alguns cliques, você pode definir o
            itinerário e a data de partida, e ter a certeza de uma viagem
            confortável e segura. Nossa equipe está pronta para atender às suas
            necessidades e garantir que você chegue ao seu destino com
            tranquilidade. Não perca mais tempo, agende já sua viagem conosco e
            desfrute de um serviço de qualidade e dedicação. A Orismar Viagens e
            Encomendas espera por você!
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <label>
              <p>Nome:</p>
              <input type="text" {...register("name")} />
            </label>
            <label>
              <p>Cidade:</p>
              <input type="text" {...register("cidade")} />
            </label>
            <label>
              <p>Celular:</p>
              <input type="text" {...register("phone")} />
            </label>
            <label>
              <p>Data:</p>
              <input type="date" {...register("date")} />
            </label>
            <label>
              <input type="submit" value="Agendar viagem" />
            </label>
          </form>
        </div>
      </div>
    </SectionSchedule>
  );
};

export default Schedule;
