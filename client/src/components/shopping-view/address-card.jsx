import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";

function AddressCard({
  addressInfo,
  handleDeleteAddress,
  handleEditAddress,
  setCurrentSelectedAddress,
  selectedId,
}) {
  return (
    <Card
      onClick={
        setCurrentSelectedAddress
          ? () => setCurrentSelectedAddress(addressInfo)
          : null
      }
      className={`cursor-pointer  ${
        selectedId?._id === addressInfo?._id
          ? "border-pink-950 border-[4px]"
          : "border-pink-950"
      }`}
    >
      <CardContent className="grid p-4 gap-4 ">
        <Label>Address: {addressInfo?.address}</Label>
        <Label>City: {addressInfo?.city}</Label>
        <Label>Pincode: {addressInfo?.pincode}</Label>
        <Label>Phone: {addressInfo?.phone}</Label>
        <Label>Note: {addressInfo?.notes}</Label>
      </CardContent>
      <CardFooter className="p-3 flex justify-between">
        <Button onClick={() => handleEditAddress(addressInfo)}  className="bg-pink-950" >Edit</Button>
        <Button onClick={() => handleDeleteAddress(addressInfo)} className="bg-pink-950" >Delete</Button>
      </CardFooter>
    </Card>
  );
}

export default AddressCard;
