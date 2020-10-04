
// Components
import { Grid, GridCol } from '../components/Grid';
import { Person } from '../components/Person';

// Data
import data from '../data/dragpeople.json'

const peopleDrag = () => {

    return (
        <Grid>
            {data.people.map((person, i) => {
                return person.location == 'Wellington' ? (
                    <GridCol
                        key={i}
                        xs={{
                            span: 2
                        }}
                        sm={{
                            span: 4
                        }}
                        md={{
                            span: 3
                        }}>
                        <Person
                            name={person.name}
                            role={person.role}
                            expression={person.expression}
                        />
                    </GridCol>
                ) : null;
            })}
        </Grid>
    );
};

export default peopleDrag;
