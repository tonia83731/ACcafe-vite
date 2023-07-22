


export default function NewsModal(){
  return (
    <div className="bg-beige py-2 px-4 w-3/4 rounded fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] desktop:w-2/4 desktop:py-0 desktop:pt-2 desktop:pb-4">
      <button className="w-full text-2xl text-grullo-100 hover:text-olive-80 flex justify-end">
        &#10799;
      </button>
      <div className="desktop:grid desktop:gap-4 desktop:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1464979681340-bdd28a61699e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="w-full h-60 object-cover object-center desktop:h-48"
        />
        <div className="mt-1 desktop:mt-0">
          <div className="title font-bold text-lg">
            Celebrate AC's 3rd Anniversary
          </div>
          <div className="">
            <p className="font-medium">
              Event Date: <span className="font-normal">2023 July 31</span>
            </p>
            <p className="font-medium">
              Location: <span className="font-normal">All branch</span>
            </p>
            <div className="">
              <p className="font-medium">Description</p>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
                enim in lectus eleifend maximus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}