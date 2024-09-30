
const Service = () => {
  let toggle = false;
  function changeName(){
    const name = document.getElementById('changeName');
    toggle =!toggle;
    name.innerText=toggle?'Najmul':'Hasan';
  }
  return (
    <div>
      <h1>This is <span id="changeName">Najmul</span></h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default Service