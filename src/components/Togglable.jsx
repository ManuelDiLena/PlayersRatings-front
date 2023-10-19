import { useState } from 'react';

export default function Togglable({ props }) {
    const [visible, setVisible] = useState(false)

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    
}