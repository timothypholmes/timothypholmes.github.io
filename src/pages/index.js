import React, { useMemo } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
//import Posts from '../components/Posts'
//import Lists from '../components/Lists'
//import Projects from '../components/Projects'
import SEO from '../components/SEO'


//import { getSimplifiedPosts } from '../utils/helpers'
//import config from '../utils/config'

//import projects from '../data/projects'
//import interviews from '../data/interviews'
//import speaking from '../data/speaking'

//import tania from '../../content/images/tania-2020.png'


const Header = () => (

    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, textAlign:'center' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Tim
        </Link>
      </h1>
    </div>
  
)
export default Header