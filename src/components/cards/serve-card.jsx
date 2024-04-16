const ServeCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-center justify-center w-full flex-col border border-gray-200/20 rounded-lg py-6 px-5 h-full">
      {icon}
      <h3 className="text-2xl leading-normal py-2">{title}</h3>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
};

export default ServeCard;
