using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FarmTest.Api.Interfaces
{
    public interface IStorage<T>
    {
        IEnumerable<T> Get();

        T Add(T newObject);

        void Delete(Guid id);

        T Update(T updateObject);
    }
}
