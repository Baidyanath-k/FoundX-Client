import { Spinner } from "@nextui-org/spinner";

const GlassLoading = () => {
    return (
        <div className="h-screen bg-black/10 fixed inset-0 z-[999] backdrop-blur-md flex justify-center items-center">
        <Spinner color="default" labelColor="foreground" size="lg"/>
      </div>
    );
};

export default GlassLoading;