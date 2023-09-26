import NotFoundImage from '../../assets/images/NotFound.jpg'


function NotFound() {
  return (
    <div className="flex justify-center mt-2">
            <img src={NotFoundImage} width={500} height={500}/>
    </div>
  )
}

export default NotFound