import deepFreeze from '../../helpers/deepFreeze';

import * as primitivesReducers from './primitives';
import * as primitiveControlsReducers from './primitiveControls';
import * as helpers from './helpers';

describe('reducers', () => {
  it('ADD_PRIMITIVE: should add primitive to state', () => {
    const stateBefore = {
      list: []
    };
    const action = {
      type: 'ADD_PRIMITIVE',
      item: {
        id: 'blur',
        name: 'Hello',
        groupName: 'blur',
        params: {
          'stdDeviation': {
            'value': 4,
            'type': 'number'
          },
          result: {
            value: 'blur'
          }
        },
        paramsValues: [
          'mode': [
            'normal',
            'multiply'
          ]
        ]
      },
      nativeEvent: {
        'offsetX': 108,
        'offsetY': 12
      }
    };
    const stateAfter = {
      list: [
        {
          id: 'blur',
          name: 'Hello',
          groupName: 'blur',
          justAdded: true,
          children: undefined,
          params: {
            'stdDeviation': {
              'value': 4,
              'type': 'number'
            },
            result: {
              value: 'blur'
            }
          },
          paramsValues: [
            'mode': [
              'normal',
              'multiply'
            ]
          ],
          nativeEvent: {
            'offsetX': 108,
            'offsetY': 12
          }
        }
      ]
    };

    deepFreeze(stateBefore);

    expect(
      primitivesReducers.primitives(stateBefore, action)
    ).toEqual(stateAfter);
  });
});

describe('reducers', () => {
  it('DUPLICATE_PRIMITIVE: should duplicate primitive in state', () => {
    const stateBefore = {
      list: [
        {
          id: 'blur',
          name: 'Hello',
          groupName: 'blur',
          params: {
            'stdDeviation': {
              'value': 4,
              'type': 'number'
            },
            result: {
              value: 'blur'
            }
          },
          paramsValues: [
            'mode': [
              'normal',
              'multiply',
            ]
          ]
        }
      ]
    };
    const action = {
      type: 'DUPLICATE_PRIMITIVE',
      id: 'blur'
    };
    const stateAfter = {
      list: [
        {
          id: 'blur',
          name: 'Hello',
          groupName: 'blur',
          params: {
            'stdDeviation': {
              'value': 4,
              'type': 'number'
            },
            result: {
              value: 'blur'
            }
          },
          paramsValues: [
            'mode': [
              'normal',
              'multiply'
            ]
          ]
        },
        {
          id: 'blur1',
          name: 'Hello',
          groupName: 'blur',
          params: {
            'stdDeviation': {
              'value': 4,
              'type': 'number'
            },
            result: {
              value: 'blur1'
            }
          },
          paramsValues: [
            'mode': [
              'normal',
              'multiply'
            ]
          ]
        }
      ]
    };

    deepFreeze(stateBefore);

    expect(
      primitivesReducers.primitives(stateBefore, action)
    ).toEqual(stateAfter);
  });
});

describe('reducers', () => {
  it('DELETE_PRIMITIVE: should delete primitive from state by ID', () => {
    const stateBefore = {
      list: [
        {
          id: 'blur',
          name: 'Hello',
          groupName: 'blur',
          params: {
            'stdDeviation': {
              'value': 4,
              'type': 'number'
            },
            result: {
              value: 'blur'
            }
          },
          paramsValues: [
            'mode': [
              'normal',
              'multiply'
            ]
          ]
        },
        {
          id: 'blur1',
          name: 'Hello',
          groupName: 'blur',
          params: {
            'stdDeviation': {
              'value': 4,
              'type': 'number'
            },
            result: {
              value: 'blur1'
            }
          },
          paramsValues: [
            'mode': [
              'normal',
              'multiply'
            ]
          ]
        }
      ]
    };
    const action = {
      type: 'DELETE_PRIMITIVE',
      id: 'blur1'
    };
    const stateAfter = {
      list: [
        {
          id: 'blur',
          name: 'Hello',
          groupName: 'blur',
          params: {
            'stdDeviation': {
              'value': 4,
              'type': 'number'
            },
            result: {
              value: 'blur'
            }
          },
          paramsValues: [
            'mode': [
              'normal',
              'multiply'
            ]
          ]
        }
      ]
    };

    deepFreeze(stateBefore);

    expect(
      primitivesReducers.primitives(stateBefore, action)
    ).toEqual(stateAfter);
  });
});

describe('reducers', () => {
  it('CHANGE_PRIMITIVE_PROP: should change primitive param value', () => {
    const stateBefore = {
      list: [
        {
          id: 'blur',
          name: 'Hello',
          groupName: 'blur',
          params: {
            mode: {
              'value': 'multiply',
              'type': 'select'
            },
            result: {
              value: 'blur'
            }
          },
          paramsValues: [
            'mode': [
              'normal',
              'multiply'
            ]
          ]
        },
        {
          id: 'blur1',
          name: 'Hello',
          groupName: 'blur',
          params: {
            mode: {
              'value': 'multiply',
              'type': 'select'
            },
            result: {
              value: 'blur1'
            }
          },
          paramsValues: [
            'mode': [
              'normal',
              'multiply'
            ]
          ]
        }
      ]
    };
    const action = {
      type: 'CHANGE_PRIMITIVE_PROP',
      id: 'blur1',
      param: 'mode',
      value: 'screen'
    };
    const stateAfter = {
      list: [
        {
          id: 'blur',
          name: 'Hello',
          groupName: 'blur',
          params: {
            mode: {
              'value': 'multiply',
              'type': 'select'
            },
            result: {
              value: 'blur'
            }
          },
          paramsValues: [
            'mode': [
              'normal',
              'multiply'
            ]
          ]
        },
        {
          id: 'blur1',
          name: 'Hello',
          groupName: 'blur',
          params: {
            mode: {
              'value': 'screen',
              'type': 'select'
            },
            result: {
              value: 'blur1'
            }
          },
          paramsValues: [
            'mode': [
              'normal',
              'multiply'
            ]
          ]
        }
      ]
    };

    deepFreeze(stateBefore);

    expect(
      primitivesReducers.primitives(stateBefore, action)
    ).toEqual(stateAfter);
  });
});
