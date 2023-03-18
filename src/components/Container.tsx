type ContainerProps = {
  styles: React.CSSProperties | undefined;
};

const Container = ({ styles }: ContainerProps) => {
  return <div style={styles}>Text context</div>;
};

export default Container;
