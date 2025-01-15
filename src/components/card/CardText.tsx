import UserImage from "../../assets/images/user-placeholder.jpg";

interface CardTextProps {
  id: number;
  title: string;
  body: string;
}

const CardText = ({ title, body }: CardTextProps) => {
  return (
    <div className="max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow">
      <div>
        <img src={UserImage} alt="Image Not Found" className="w-full"/>
      </div>
      <h5 className="my-2 text-2xl font-medium line-clamp-2 uppercase tracking-tight text-gray-900 hover:underline hover:text-rose-300 hover:cursor-pointer ">
        {title}
      </h5>
      <p className="mb-3 font-normal text-justify leading-2 capitalize line-clamp-3 text-gray-700">
        {body}
      </p>
      <button className="inline-flex items-center px-4 py-2.5 text-sm font-medium capitalize text-center text-white bg-black rounded-md">
        read more
      </button>
    </div>
  );
};

export default CardText;
