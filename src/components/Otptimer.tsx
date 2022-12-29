import React from 'react';

//Props types
interface Props {
    seconds?: number;
    minutes?: number;
    text?: string;
    buttonText?: string;
    containerClass?: string;
    textClassName?: string;
    timerClassName?: string;
    buttonStyle?: React.CSSProperties
}

const Otptimer = (props: Props) => {
    //From props
    const { text = "Resend otp in", containerClass = "otp-timer-container", buttonText = "Resend", textClassName = "otp-text", timerClassName = "otp-timer", buttonStyle } = props;
    //State
    const [minutes, setMinutes] = React.useState<number>(props.minutes ? props.minutes : 0)
    const [seconds, setSeconds] = React.useState<number>(props.seconds ? props.seconds : 30)
    //Handler
    var myInterval: NodeJS.Timer
    const onTimeHandler = () => {
        myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1)
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1)
                    setSeconds(59)
                }
            }
        }, 1000)
    }
    //Effect
    React.useEffect(() => {
        onTimeHandler()
        return () => clearInterval(myInterval)
    })
    //Handler
    const resendHandler = () => {
        setSeconds(props.seconds ? props.seconds : 30)
        setMinutes(props.minutes ? props.minutes : 0)
        onTimeHandler()
    }
    //Styling
    const ButtonStyles = {
        border: "none",
        ...buttonStyle
    }
    return (
        <div>
            {minutes === 0 && seconds === 0 ? (
                <button onClick={resendHandler} style={ButtonStyles}>
                    {buttonText}
                </button>
            ) : (
                <div className={containerClass}>
                    <span className={textClassName}>{text}</span>{" "}
                    <span className={timerClassName}>{minutes < 10 ? `0${minutes}` : minutes}</span>:
                    <span className={timerClassName}>{seconds < 10 ? `0${seconds}` : seconds}</span>
                </div>
            )}
        </div>
    );
};

export default Otptimer;