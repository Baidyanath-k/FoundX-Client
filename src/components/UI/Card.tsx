import { TPosts } from "@/src/types";
import { Button } from "@nextui-org/button";
import {
  CardBody,
  CardFooter,
  CardHeader,
  Card as NextUiCard,
} from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { format } from "date-fns";

const Card = ({ post }: { post: TPosts }) => {
  const { _id, title, description, images, category, city, dateFound } = post;
  return (
    <NextUiCard className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{category?.name}</p>
        <small className="text-default-500">
          {format(new Date(dateFound), "dd/MMMM/yyyy")}
        </small>
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={images[0]}
          width={270}
        />
      </CardBody>

      <CardFooter className="justify-around before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{city}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Details
        </Button>
      </CardFooter>
    </NextUiCard>
  );
};

export default Card;
