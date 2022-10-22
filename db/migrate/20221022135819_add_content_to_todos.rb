class AddContentToTodos < ActiveRecord::Migration[7.0]
  def change
    add_column :todos, :content, :string
  end
end
