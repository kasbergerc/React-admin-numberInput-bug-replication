import { FC } from 'react';
import { Admin, Create, Edit, ListGuesser, NumberInput, Resource, SimpleForm, TextInput } from 'react-admin';
import './App.css';
import { dataProvider } from './dataProvider';

export const App: FC = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="posts"
        list={ListGuesser}
        create={
          <Create>
            <SimpleForm>
              <NumberInput source="userId" />
              <TextInput source="title" />
            </SimpleForm>
          </Create>
        }
        edit={
          <Edit>
            <SimpleForm>
              <NumberInput source="userId" label="someLabel" title="someTitle" />
              <TextInput source="title" label="someLabel" title="someTitle" />
            </SimpleForm>
          </Edit>
        }
      />
    </Admin>
  );
};
