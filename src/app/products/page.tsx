import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProdutcPage = () => {
  return (
    <div className="p-5 border border-red-500 rounded-xl">
      <h1 className="text-red-500">Product Page</h1>
      <Button>Click me</Button>
      <Input placeholder="Bora coda!"></Input>
    </div>
  );
};

export default ProdutcPage;
