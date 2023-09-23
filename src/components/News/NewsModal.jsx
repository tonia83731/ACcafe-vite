import convertNumberToTime from "../../utilites/convertNumberToTime";


export default function NewsModal({props, onModalClick}){
  return (
    <div className="bg-beige-100 py-2 px-4 w-3/4 rounded fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] desktop:w-2/4 desktop:py-0 desktop:pt-2 desktop:pb-4">
      <button className="w-full text-2xl text-grullo-100 hover:text-olive-80 flex justify-end" onClick={onModalClick}>
        &#10799;
      </button>
      {props.map((prop) => {
        return (
          <div
            className="desktop:grid desktop:gap-4 desktop:grid-cols-2"
            key={prop.id}
          >
            <img
              src={prop.image}
              alt=""
              className="w-full h-60 object-cover object-center desktop:h-48"
            />
            <div className="mt-1 desktop:mt-0">
              <div className="title font-bold text-lg">{prop.title}</div>
              <div className="">
                <p className="font-medium">
                  Event Date:
                  <span className="font-normal">
                    {convertNumberToTime(prop.create_at)}
                  </span>
                </p>
                <p className="font-medium">
                  Location: <span className="font-normal">{prop.content}</span>
                </p>
                <div className="">
                  <p className="font-medium">Description</p>
                  <p className="">{prop.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}