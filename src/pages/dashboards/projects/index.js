// ** MUI Imports
import { gql, useQuery, useMutation } from '@apollo/client';

const AllProjectsQuery = gql`
query GetProjects {
    getProjects {
      name
    }
  }
`
const CRMDashboard = () => {
    const { data, loading, error } = useQuery(AllProjectsQuery);

    if (loading) {
        return <p>Loading</p>
    }
    if (error) {
        return <p>{error.message}</p>
    }
    console.log(data.getProjects
    )
    return (
        <>
            {data.getProjects.map((d) => {
               return  <p>{d.name}</p>
            })}
        </>
    )
}

export default CRMDashboard
