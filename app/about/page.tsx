import React from 'react'
import Link from 'next/link'

export default function About() {
return (
    <div>
        <h2>
            My name is Gheorghe Marinca. I am a Software engineer and a problem solving enthusiast.
        </h2>
        <br/>
        <p>
            Connect with me on <Link className='underline' href="https://www.linkedin.com/in/gheorghe-marinca/">LinkedIn</Link>.
        </p>
        <p>
            My git repository is <Link className='underline' href="https://github.com/ghita">here</Link>.
        </p>
    </div>
)
}
