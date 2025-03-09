import { Container } from "react-bootstrap"
import Col from 'react-bootstrap/Col'

export default function MyGiftCard({data}){
    return (
        <div className="text-center mt-4">
            <h3 style={{color:"#323232",fontSize:"24px"}}>TRENDING GIFT CARDS</h3>
            <Container className="imgCon" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"2rem",padding:"15px 10px",backgroundColor:"#EEF1DA"}}>
            {
                 
                data.map((val,ind)=>{
                        return(
                            <Col key={ind}>
                            <img style={{borderRadius:"30px",marginTop:"10px",width:"280px"}} src={val.img} alt={`img ${val.id}`} />
                            </Col>
                        )
                })
            }

            </Container>
        </div>
    )
}