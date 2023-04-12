import React from 'react';

//Props types
interface Props {
    seconds?: number;
    minutes?: number;
    text?: string;
    buttonText?: string;
    containerClass?: string;
    buttonContainerClass?: string;
    buttonComponent?: React.ReactNode;
    textClass?: string;
    timerClass?: string;
    buttonStyle?: React.CSSProperties;
    textStyle?: React.CSSProperties;
    timerStyle?: React.CSSProperties;
    buttonContainerStyle?: React.CSSProperties;
    textContainerStyle?: React.CSSProperties;
    onResend: () => void
}

const Otptimer = (props: Props) => {
    //From props
    const { text = "Resend otp in", containerClass = "otp-timer-container", buttonText = "Resend", textClass = "otp-text", buttonContainerClass = "button-container", timerClass = "otp-timer", buttonStyle, buttonContainerStyle, timerStyle, textStyle, textContainerStyle, onResend } = props;
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
        onResend()
    }
    //Styling
    const ButtonStyles = {
        border: "none",
        background: "none",
        cursor: "pointer",
        padding: 0,
        margin: 0,
        ...buttonStyle
    }
    const textContainerStyles = {
        fontSize: "15px",
        ...textContainerStyle
    }
    return (
        <div>
            {minutes === 0 && seconds === 0 ? (
                <div className={buttonContainerClass} style={buttonContainerStyle}>
                    <button onClick={resendHandler} style={ButtonStyles}>
                        {buttonText}
                    </button>
                </div>
            ) : (
                <div className={containerClass} style={textContainerStyles}>
                    <span className={textClass} style={textStyle}>{text}</span>{" "}
                    <span className={timerClass} style={timerStyle}>
                        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
                        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
                    </span>
                </div>
            )}
        </div>
    );
};
export default Otptimer;