const AboutMe = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <img
          style={{ width: 300, height: 300, borderRadius: 100 }}
          src="src/assets/img/me.jpg"
          alt="me"
        />
        <p style={{ textAlign: "justify", marginLeft: 20, marginRight: 20 }}>
          Hello my name is Javier Armando Sarmiento Gil and I am a developer
          from Mexico. I am currently
        </p>
      </div>
    </>
  );
};

export default AboutMe;
