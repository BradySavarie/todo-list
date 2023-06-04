import './styles.css';
import './handlers';
import * as UI from './UI';
import { createProject } from './projects';

createProject('Test Project');
UI.updateNewTaskModal();
UI.renderProjectCards();
UI.renderTaskCards();
