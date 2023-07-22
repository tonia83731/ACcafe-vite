import { ReactComponent as Success } from "../../assets/icon/footer/success.svg";
import { ReactComponent as Error } from "../../assets/icon/footer/False.svg";


export function SuccessTag({onCloseClick}){
  return (
    <div className="bg-white-80 text-black-80 text-xs w-1/6 min-w-[210px] mx-auto mt-2 p-1 flex flex-row items-center rounded-sm tablet:w-2/6 tablet:justify-between">
      <span className="success-icon">
        <Success />
      </span>
      <span className="px-1">The newest info will sent to the email</span>
      <button className="" onClick={onCloseClick}>&#10799;</button>
    </div>
  );
}


export function ErrorTag({ onCloseClick }) {
  return (
    <div className="bg-white-80 text-black-80 text-xs w-1/6 min-w-[210px] mx-auto mt-2 p-1 flex flex-row items-center rounded-sm tablet:w-2/6 tablet:justify-between">
      <span className="error-icon">
        <Error />
      </span>
      <span className="px-1">This email is invaild. Please try again.</span>
      <button className="" onClick={onCloseClick}>
        &#10799;
      </button>
    </div>
  );
}