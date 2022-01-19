function About() {
    return (
        <>
        <h1 className='text-6xl mb-4'>Github Finder</h1>
        <p className='mb-4 text-2xl font-light'>
        Sebuah Website React untuk mencari profil GitHub dan melihat detail profil. Proyek ini adalah bagian dari
          <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
            {' '}
            "React Front To Back 2022"
          </a>{' '}
          Udemy course yang dibuat oleh
          <strong>
            <a href='https://traversymedia.com'> Brad Traversy</a>
          </strong>
          .
        </p>
        <p className='text-lg text-gray-400'>
          Version <span className='text-white'>1.0.0</span>
        </p>
        <p className='text-lg text-gray-400'>
          Layout By:
          <a className='text-white' href='https://twitter.com/hassibmoddasser'>
            Hassib Moddasser
          </a>
        </p>
      </>
    )
}

export default About
