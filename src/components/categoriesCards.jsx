import Container from 'react-bootstrap/Container';
import pic from '../../src/images/shopon.pk-1741372708474/gift-card.png'

export default function MyCategories({ data }) {
  return (
    <>

      <Container style={{background:"#EEF1DA",marginTop:"20px ",padding:"14px",borderRadius:"10p",paddingBottom:"5px"}}>
      <ul style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",listStyle:"none",gap:"2rem",color:"black"}}>
        {
        data.map((value, index) => {
            return(
                <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
                    <img src={value.imglink} width={80}  className="rounded shadow-none"  />
                    <li key={index}>{value.title}</li>
                </div>
            )
        })
        }
      </ul>
      </Container>
    </>
  );
}
