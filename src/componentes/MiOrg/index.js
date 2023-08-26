
import "./MiOrg.css"



const MiOrg =(props)=>{

  //estado - hooks (funcionalidad en react, que ayudan a trabajar con el comportamiento de react)
  // useState (utiliza el estado en español)
  // función --> useState();
  //const  [nombreVariable, funcionActualiza]=useState(valueIitial)
  console.log(props)
  //const [mostrar, actualizarMostrar]=useState (true);
  //const manejarClick =()=>{
  //  console.log("Mostrar/Ocultar elemento", !mostrar);
  //  actualizarMostrar(!mostrar);
  //}

  return <section className="orgSection">

    <h3 className="title">Mi organización</h3>
    <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>

  </section>
}

export default MiOrg;