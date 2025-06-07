import Icon from "@/components/ui/icon";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      <Icon name="Home" size={16} />
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Icon name="ChevronRight" size={14} />
          {item.href ? (
            <a
              href={item.href}
              className="hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
