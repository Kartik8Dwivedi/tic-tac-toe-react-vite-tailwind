import Icon from '../Icon/icon'

const Card = ({ onPlay, player, index, gameEnd }) => {
  let icon = <Icon />;
  if (player == "X") {
    icon = <Icon name={"cross"} />;
  } else if (player == "O") {
    icon = <Icon name={"circle"} />;
  }

  return (
    <div
      className="lg:w-[25%] m-3 flex justify-center items-center rounded-xl bg-yellow-600 border lg:h-[25%] w-[25%] h-[20%] my-2 mx-2"
      onClick={() => {
        !gameEnd && player == "" && onPlay(index);
      }}
    >
      {icon}
    </div>
  );
};

export default Card