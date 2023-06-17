const FounderCard = ({ founder }) => {
  const { image, name, bio, linkedin, github } = founder;
  return (
    <div className='founder-card'>
      <div className='image-container'>
        <img src={image} alt='Image of Jeremy' />
        <div className='image-overlay' />
      </div>
      <span className='name'>{name}</span>
      <hr />
      <p>{bio}</p>
      <div className='socials'></div>
    </div>
  );
};

export default FounderCard;
