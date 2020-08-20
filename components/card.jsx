import { Button, Card } from "react-bootstrap";

export default function CardComponent({ progaram }) {
  return (
    <Card style={{ width: "8rem", padding: "0.5rem", height:270}}>
      
      <Card.Body style={{padding: "0rem"}} >
      <Card.Img
        style={{ height: 125, backgroundColor: "#f2f2f2" }}
        variant="top"
        src={progaram.links.mission_patch} alt="Image Not Available"
      />
        <Card.Title style={{ color: "blue", fontSize:12,padding: 0.5,marginBottom: "0.25rem",marginTop:"0.5rem" }}>{progaram.mission_name}</Card.Title>
        <Card.Text style={{ fontSize:12 }}>
         Mission Ids: {progaram.mission_id}<br/>
        Launch year: {progaram.launch_year}<br/>
        Successful Launch: { progaram.launch_success}<br/>
        Successful Landing: {progaram.rocket.first_stage.cores.land_success}
        </Card.Text>

      </Card.Body>
    </Card>
  );
}
