import { Input } from "@nextui-org/input";
import { SearchIcon } from "../../icons";

const Landing = () => {
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/glass.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="max-w-xl flex-1 mx-auto pt-20">
        <form className="flex-1">
          <Input
            aria-label="search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            labelPlacement="outside"
            placeholder="Search...."
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0 " />
            }
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

export default Landing;
