type GreetProps = {
  name: string;
  messageCount: number;
  isLogged: boolean;
};

const Greet = ({ name, messageCount, isLogged }: GreetProps) => {
  return (
    <div>
      <h2>
        {isLogged
          ? `Welcome ${name}! You have ${messageCount} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

export default Greet;
