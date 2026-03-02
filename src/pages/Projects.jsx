import { FaGithub, FaYoutube } from "react-icons/fa";
import BudgetAppImage from "../assets/img/projects/budget-app.webp";
import ProductManagementImage from "../assets/img/projects/product-management-system.webp";
import WardrobeInventoryImage from "../assets/img/projects/wardrobe-inventory.webp";

export default function Projects() {
  return (
    <section className="projects">
          <div className="project-card">
    <div className="project-description">
      <h2>Product Management System</h2>
      <p>
        Comprehensive ASP.NET Blazor web application designed for efficient warehouse inventory management and employee
        administration. The system provides a role-based interface where employees can access and manage product
        information including product names, SKU (Stock Keeping Unit) identifiers, warehouse locations, and stock
        quantities.
      </p>
    </div>
    <div className="project-links">
      <a href="https://github.com/andymartinez1/ProductManagementSystem">
        View on GitHub <FaGithub /></a>
      <a href="https://www.youtube.com/watch?v=thTlFYW68hw">
        View on YouTube <FaYoutube /></a>
    </div>
    <div className="project-tags">
      <span>ASP.NET</span>
      <span>Identity</span>
      <span>EF Core</span>
      <span>SQL Server</span>
    </div>
    <div className="project-image">
      <img src={ProductManagementImage} alt="Project"/>
    </div>
  </div>

  <div className="project-card">
    <div className="project-image">
      <img src={BudgetAppImage} alt="Project"/>
    </div>
    <div className="project-description">
      <h2>Budget App</h2>
      <p>
        A full-featured personal finance management web application built with ASP.NET Core MVC. Budget App empowers
        users to take control of their finances by providing an intuitive interface for recording all financial
        transactions, categorizing spending patterns, and gaining insights into their money flow. Whether you're
        tracking daily expenses, monitoring income sources, or analyzing spending habits, this app provides the tools
        you need to maintain financial awareness and make informed decisions about your budget.
      </p>
    </div>
    <div className="project-links">
      <a href="https://github.com/andymartinez1/Budget-App">
         View on GitHub <FaGithub /></a>
      <a href="https://github.com/andymartinez1/Budget-App">
        View on YouTube <FaYoutube /></a>
    </div>
    <div className="project-tags">
      <span>ASP.NET Core MVC</span>
      <span>Identity</span>
      <span>SQL Server</span>
      <span>XUnit</span>
    </div>
  </div>

  <div className="project-card">
    <div className="project-description">
      <h2>Wardrobe Inventory</h2>
      <p>
        A full-featured wardrobe inventory web app built with ASP.NET Blazor and .NET 10 that helps you catalog and
        manage your clothing collection in a clean, modern UI. The app provides a streamlined workflow for adding items,
        updating details, uploading images, and browsing your wardrobe efficiently—making it easy to stay organized and
        quickly find what you own.
      </p>
    </div>
    <div className="project-links">
      <a href="https://github.com/andymartinez1/WardrobeInventory">
         View on GitHub <FaGithub /></a>
      <a href="https://github.com/andymartinez1/WardrobeInventory">
        View on YouTube <FaYoutube /></a>
    </div>
    <div className="project-tags">
      <span>Blazor</span>
      <span>EF Core</span>
      <span>SQL Server</span>
    </div>
    <div className="project-image">
      <img src={WardrobeInventoryImage} alt="Project" />
    </div>
  </div>

          <div className="project-github">
            <a href="https://github.com/andymartinez1">
              View more of my projects on GitHub
            </a>
          </div>
        </section>
  );
}
