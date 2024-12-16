import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

function PaymentSuccessPage() {
  const navigate = useNavigate();

  return (
    <Card className="p-10">
      <CardHeader className="p-0">
        <CardTitle className="text-4xl">Payment is successfull!</CardTitle>
      </CardHeader>
      <Button className="mt-5 bg-pink-950 hover:bg-black" onClick={() => navigate("/shop/account")}>
        View Order and Bill
      </Button>
      <Button className="ml-10 mt-5 bg-pink-950 hover:bg-black" onClick={() => navigate("/shop/home")}>
        Go To Home
      </Button>
    </Card>
  );
}

export default PaymentSuccessPage;
