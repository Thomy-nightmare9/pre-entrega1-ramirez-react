import { BarLoader } from "react-spinners";

const Loading = () => {
    return (
        <div
            style={{
                width: "100%",
                height: "90vh",
                display: "flex",
                justifyContent: "center",
                alingItems: "center",
                marginTop: "200px",
            }}
        >
            <BarLoader
                color="#0000FF"
                height={6}
                width={200}
            />
        </div>
    );
};
export default Loading
