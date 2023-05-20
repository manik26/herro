const Tory = ({ tory }) => {
  const {
    picture_URL,
    name,
    email,
    sub_Category,
    price,
    rating,
    quantity,
    description,
  } = tory || {};
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

export default Tory;
