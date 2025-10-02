import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/header.component.jsx';
import CoreConcept from './components/CoreConcept.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]}/>
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
      </main>
    </div>
  );
}

export default App;