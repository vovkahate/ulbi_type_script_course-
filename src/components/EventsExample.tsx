import { useState, useRef } from "react";

const EventsExample: React.FC = () => {
    const [value, setValue] = useState<string>("");
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    };

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("drag");
    };

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    };

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    };

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log("drop");
    };

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={changeHandler}
                placeholder="управляемый"
            />
            <input type="text" ref={inputRef} placeholder="неуправляемый" />
            <button onClick={clickHandler}>click</button>
            <div
                onDrag={dragHandler}
                draggable
                style={{ width: 200, height: 200, backgroundColor: "red" }}
            ></div>
            <div
                onDrop={dragHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: isDrag ? "blue" : "red",
                    marginTop: 15,
                }}
            ></div>
        </div>
    );
};

export default EventsExample;
