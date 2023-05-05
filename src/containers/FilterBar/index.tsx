import { ChangeEventHandler, FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Form, Row, FloatingLabel } from 'react-bootstrap';

import * as selectors from '@reducers/filter/selectors';
import { actions } from '@reducers/filter';

import './index.scss';

const FilterBar: FC<{}> = () => {
  const dispatch = useDispatch<any>();

  const yearOptions = useSelector(selectors.yearOptionsSelector);
  const typeOptions = useSelector(selectors.typeOptionsSelector);

  const search = useSelector(selectors.searchSelector);
  const year = useSelector(selectors.yearSelector);
  const type = useSelector(selectors.typeSelector);

  const changeYear: ChangeEventHandler<HTMLSelectElement> = useCallback(e => {
    dispatch(actions.changeYear(e.target.value));
  }, []);

  const changeType: ChangeEventHandler<HTMLSelectElement> = useCallback(e => {
    dispatch(actions.changeType(e.target.value));
  }, []);

  useEffect(() => {
    if (yearOptions.length === 0) {
      dispatch(actions.fetchYearOptions());
    }
    if (typeOptions.length === 0) {
      dispatch(actions.fetchTypeOptions());
    }
  }, []);

  // Fetch Movie
  useEffect(() => {
    dispatch(actions.fetchMovie());
  }, [search, year, type]);

  return (
    <Row className="py-2">
      <Col md="6">
        <FloatingLabel controlId="floatingSelect" label="Year">
          <Form.Select aria-label="Floating label year select" onChange={changeYear}>
            {yearOptions.map(item => {
              return <option key={item}>{item ? item : 'All'}</option>;
            })}
          </Form.Select>
        </FloatingLabel>
      </Col>
      <Col md="6">
        <FloatingLabel controlId="floatingSelect" label="Type">
          <Form.Select aria-label="Floating label type select" onChange={changeType}>
            {typeOptions.map(item => {
              return (
                <option key={item} className="text-capitalize">
                  {item ? item : 'All'}
                </option>
              );
            })}
          </Form.Select>
        </FloatingLabel>
      </Col>
    </Row>
  );
};

export default FilterBar;
