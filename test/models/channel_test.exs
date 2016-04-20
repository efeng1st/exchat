defmodule Exchat.ChannelTest do
  use Exchat.ModelCase, async: true

  alias Exchat.Channel

  @valid_attrs %{name: "some content"}
  @invalid_attrs %{}

  test "public_changeset with valid attributes" do
    changeset = Channel.public_changeset(%Channel{}, @valid_attrs)
    assert changeset.valid?
    assert %{type: 1} = changeset.changes
  end

  test "direct_changeset with valid attributes" do
    changeset = Channel.direct_changeset(%Channel{}, @valid_attrs)
    assert changeset.valid?
    assert %{type: 2} = changeset.changes
  end

  test "changeset with invalid attributes" do
    changeset = Channel.public_changeset(%Channel{}, @invalid_attrs)
    refute changeset.valid?
  end
end
