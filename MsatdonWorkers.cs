public class Worker{
    public string Name { get; }
}

public class Workers : IEnumerable<Worker>
{
    public readonly List<Worker> _workers = new List<Worker>();

    public Worker this[int index] { get => _workers[index]; }
    
    public void Add(Worker worker){
        _workers.Add(worker);
    }
    
    public void Remove(Worker worker){
        _workers.Remove(worker);
    }
    
    IEnumerator<Worker> IEnumerable.GetEnumerator()
    {
        return _workers.GetEnumerator();
    }
    
    IEnumerator IEnumerable.GetEnumerator()
    {
        return _workers.GetEnumerator();
    }
}
