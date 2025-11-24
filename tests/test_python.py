import pandas as pd
import pytest

@pytest.fixture
def sample_dataframe():
    """Creates a sample DataFrame for testing."""
    data = {'col1': [1, 2, 3], 'col2': [4, 5, 6]}
    return pd.DataFrame(data)

def test_dataframe_sum(sample_dataframe):
    """Tests if the sum of a column is calculated correctly."""
    total = sample_dataframe['col1'].sum()
    assert total == 6

def test_dataframe_shape(sample_dataframe):
    """Tests if the DataFrame has the correct dimensions."""
    assert sample_dataframe.shape == (3, 2)