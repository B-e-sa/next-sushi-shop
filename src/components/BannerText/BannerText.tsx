const BannerText = () => {

  const wordStyle = { textShadow: "1px 1px #dacc4e" }

  return (
    <div className="sm:pl-0 pl-10">
      <p className='sm:text-6xl sm:w-96 font-serif text-5xl w-fit '>
        steaks<br />
        <em className='text-amber-200' style={wordStyle}>sushi</em>,
        seafood<br />
        & salads
      </p>
      <p className='sm:w-64 sm:text-5x1 text-xs w-52'>
        From Chinese to European cuisine, dishes are made quickly and deliciously.
      </p>
    </div>
  );
};

export default BannerText;