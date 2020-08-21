import { Button, Card } from "react-bootstrap";

export default function CardComponent({ progaram }) {
  const launchSuccess = progaram.launch_success ? "Yes" : "No";
  let landSuccess = "No";

  if (
    Array.isArray(progaram.rocket.first_stage.cores) &&
    progaram.rocket.first_stage.cores[0].land_success
  ) {
    landSuccess = progaram.rocket.first_stage.cores[0].land_success
      ? "Yes"
      : "No";
  }
  return (
    <Card style={{ padding: "0.5rem"}}>
      <Card.Body style={{padding: "0.25rem"}} >
        <Card.Img
          style={{ backgroundColor: "#f2f2f2" }}
          variant="top"
          src={progaram.links.mission_patch}
          alt="Image Not Available"
        />
        <Card.Title
          style={{ 
            color: "blue", 
            fontSize: 12,
            padding: 0.5,
            marginBottom: "0.25rem",
            marginTop: "0.5rem" 
          }}
        >
          {progaram.mission_name}
        </Card.Title>
        <Card.Text style={{ fontSize:12 }}>
          Mission Ids: {progaram.mission_id}
          <br/>
          Launch year: {progaram.launch_year}
          <br/>
          Successful Launch: {launchSuccess}
          <br/>
          Successful Landing: {landSuccess}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
