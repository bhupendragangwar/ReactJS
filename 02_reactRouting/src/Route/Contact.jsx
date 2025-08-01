import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  return <div>
    <h2>Contact page</h2>
    <button onClick={() => navigate('/welcome')}>Click</button>
  </div>
}