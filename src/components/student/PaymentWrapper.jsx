import { useParams } from "react-router-dom";
import Payment from "./Payment";
import { coursesData } from "../../assets/assets";

const PaymentWrapper = () => {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id == id);

  if (!course)
    return <div className="text-center py-20 text-2xl">Course not found</div>;

  return <Payment course={course} />;
};

export default PaymentWrapper;
