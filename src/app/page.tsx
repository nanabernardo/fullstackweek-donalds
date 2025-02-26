import { redirect } from "next/navigation";

const HomePage = () => {
  redirect("/fsw-donalds");
  return <h1>Redirecionando...</h1>;
};

export default HomePage;
