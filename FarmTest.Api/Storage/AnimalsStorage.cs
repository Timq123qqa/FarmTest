using FarmTest.Api.Interfaces;
using FarmTest.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FarmTest.Api.Storage
{
    public class AnimalsStorage: IStorage<Animal>
    {
        static List<Animal> Animals = new List<Animal>();

        static AnimalsStorage()
        {
#if DEBUG
            Animals.Add(new Animal { Name = "Goat Stacy", Id = Guid.NewGuid() });
            Animals.Add(new Animal { Name = "Cow Hillary", Id = Guid.NewGuid() });
            Animals.Add(new Animal { Name = "Bull Joe", Id = Guid.NewGuid() });
            Animals.Add(new Animal { Name = "Cow Alice", Id = Guid.NewGuid() });
            Animals.Add(new Animal { Name = "Dog Snowflake", Id = Guid.NewGuid() });
#endif
        }

        public Animal Add(Animal newObject)
        {
            if (newObject == null || string.IsNullOrEmpty(newObject.Name))
                throw new ArgumentException("Animal name can't be empty");

            if (Animals.Any(p => p.Name == newObject.Name))
                throw new ArgumentException("An animal with the same name already enlisted");

            newObject.Id = Guid.NewGuid();

            Animals.Add(newObject);

            return newObject;
        }

        public void Delete(Guid id)
        {
            Animals.RemoveAll(p => p.Id == id);
        }

        public IEnumerable<Animal> Get()
        {
            return Animals;
        }

        public Animal Update(Animal updateObject)
        {
            if (updateObject == null || string.IsNullOrEmpty(updateObject.Name))
                throw new ArgumentException("Animal name can't be empty");

            if (Animals.Any(p => p.Name == updateObject.Name && p.Id != updateObject.Id))
                throw new ArgumentException("An animal with the same name already enlisted");

            var stored = Animals.FirstOrDefault(p => p.Id == updateObject.Id);
            if (stored != null)
                stored.Name = updateObject.Name;
            else
                throw new ArgumentException("Requested animal was not found");

            return stored;
        }
    }
}
